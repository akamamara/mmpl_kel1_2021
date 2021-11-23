from django.urls import path
from .views import ProfilDetail


urlpatterns = [
    path('<str:pk>/', ProfilDetail.as_view()),
]