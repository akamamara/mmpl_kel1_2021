from django.urls import path
from .views import ProfilDetail, ProfilSiswaDetail


urlpatterns = [
    path('<str:pk>/', ProfilDetail.as_view()),
    path('siswa/<str:pk>/', ProfilSiswaDetail.as_view()),
]