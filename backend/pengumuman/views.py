from .models import Pengumuman
from .serializers import ListPengumumanSerializer, PengumumanSerializer
from .permissions import IsGuru
from rest_framework import generics

class ListPengumuman(generics.ListCreateAPIView):
    permission_classes = (IsGuru, )
    queryset = Pengumuman.objects.all()
    serializer_class = ListPengumumanSerializer

class PengumumanDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsGuru, )
    queryset = Pengumuman.objects.all()
    serializer_class = PengumumanSerializer