from .models import Profil, ProfilSiswa
from .serializers import (
    ProfilSerializer, ProfilSiswaSerializer,
    ProfilListSerializer, ProfilSiswaListSerializer,
    )
from .permissions import IsProfileOwner, IsSiswa
from rest_framework import generics

class ProfilList(generics.ListAPIView):
    # permission_classes = (IsProfileOwner, )
    queryset = Profil.objects.all()
    serializer_class = ProfilListSerializer

class ProfilSiswaList(generics.ListAPIView):
    # permission_classes = (IsProfileOwner, )
    queryset = ProfilSiswa.objects.all()
    serializer_class = ProfilSiswaListSerializer

class ProfilDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsProfileOwner, )
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer

class ProfilSiswaDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsSiswa, )
    queryset = ProfilSiswa.objects.all()
    serializer_class = ProfilSiswaSerializer