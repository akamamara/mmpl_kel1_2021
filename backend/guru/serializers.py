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
            'id', 'email', 'first_name', 'last_name',
        ]

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required = True,
        validators = [UniqueValidator(queryset=CustomUser.objects.all())]
    )
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = (
            'email', 'first_name', 'last_name','password', 'password2',
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
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            password = validated_data['password'],
        )

        # user.set_password(validated_data['password'])
        return user