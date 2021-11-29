from django.urls import path
from .views import (
    ProfilDetail, ProfilSiswaDetail,
    ProfilList, ProfilSiswaList
    )


urlpatterns = [
    path('guru/', ProfilList.as_view()),
    path('siswa/', ProfilSiswaList.as_view()),
    path('guru/<str:pk>/', ProfilDetail.as_view()),
    path('siswa/<str:pk>/', ProfilSiswaDetail.as_view()),
]