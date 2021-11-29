from django.urls import path
from .views import GuruList, RegisterView



urlpatterns = [
    path('users/', GuruList.as_view()), # ini sebenarnya endpoint utk list semua user yang sudah daftar
    path('register/', RegisterView.as_view()),
]