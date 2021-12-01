from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    list_display=('email', 'user_type', )
    list_filter = ('user_type', )
    search_fields = ['email', ]


admin.site.register(CustomUser, CustomUserAdmin)