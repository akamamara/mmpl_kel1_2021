from django.db import models
from django.db.models import fields
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class GuruSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 'email', 'user_type',
        ]

class RegisterSerializer(serializers.ModelSerializer):
    USER_TYPE_CHOICES = (
      (1, 'guru'),
      (2, 'siswa'),
      )
    email = serializers.EmailField(
        required = True,
        validators = [UniqueValidator(queryset=CustomUser.objects.all())]
    )
    user_type = serializers.ChoiceField(choices=USER_TYPE_CHOICES, required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password], style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = CustomUser
        fields = (
            'email', 'password', 'password2', 'user_type',
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }
    
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        
        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email = validated_data['email'],
            password = validated_data['password'],
            user_type = validated_data['user_type'],
        )

        # user.set_password(validated_data['password'])
        return user