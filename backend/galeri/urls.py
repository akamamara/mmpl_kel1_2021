from django.urls import path
from .views import (
    ListGaleri, ListGambarGaleri, DetailGaleri, DetailGambarGaleri
)

urlpatterns = [
    path('', ListGaleri.as_view()),
    path('<str:pk>/', DetailGaleri.as_view()),
    path('images/', ListGambarGaleri.as_view()),
    path('images/<str:pk>/', DetailGambarGaleri.as_view()),
]