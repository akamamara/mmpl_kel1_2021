# ini adalah modul untuk generate custom token. dimana selain mengembalikan token juga info user_type

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairViewSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super(CustomTokenObtainPairViewSerializer, self).validate(attrs)
        data.update({'id': self.user.id})
        data.update({'user_type': self.user.user_type})
        return data

class CustomTokenObtainPairView(TokenObtainPairView):

    serializer_class = CustomTokenObtainPairViewSerializer
    token_obtain_pair = TokenObtainPairView.as_view()