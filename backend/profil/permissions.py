from rest_framework import permissions
from rest_framework.response import Response

class IsProfileOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # only the profile owner can have full CRUD to his/her profile
         return obj.email_guru == request.user