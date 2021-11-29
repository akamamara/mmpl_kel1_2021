from typing import Tuple
from rest_framework import permissions
from guru.models import CustomUser

class IsGuru(permissions.BasePermission):
    
    def has_permission(self, request, view):

        try:
            user = CustomUser.objects.get(email=request.user)
            
            if user.user_type == 1:
                return True
            else:
                return False

        except CustomUser.DoesNotExist:
            
            if request.method in permissions.SAFE_METHODS:
                return True