from django.urls import path
from .views import (
    ListBerita, BeritaDetail,
)

urlpatterns = [
    path('', ListBerita.as_view()),
    path('<str:pk>/', BeritaDetail.as_view()),
]