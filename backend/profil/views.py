from .models import Profil
from .serializers import ProfilSerializer
from .permissions import IsProfileOwner
from rest_framework import generics


class ProfilDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsProfileOwner, )
    queryset = Profil.objects.all()
    serializer_class = ProfilSerializer