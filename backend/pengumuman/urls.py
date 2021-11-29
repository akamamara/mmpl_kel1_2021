from django.urls import path
from .views import (
    ListPengumuman, PengumumanDetail,
)

urlpatterns = [
    path('', ListPengumuman.as_view()),
    path('<str:pk>/', PengumumanDetail.as_view()),
]