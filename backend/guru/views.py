from django.shortcuts import render
from .models import CustomUser
from .serializers import GuruSerializer, RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

class GuruList(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = GuruSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny, )
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": GuruSerializer(user, context=self.get_serializer_context()).data,
            "message": "Akun anda berhasil dibuat, silahkan menuju halaman Login",
        })