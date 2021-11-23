from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None, **kwargs):
        if not email:
            raise ValueError("Harap masukkan email")
        if not password:
            raise ValueError("Harap masukkan password")
        if not first_name:
            raise ValueError("Harap masukkan nama depan")
        if not last_name:
            raise ValueError("Harap masukkan nama belakang")

        user = self.model(
            email = self.normalize_email(email)
        )
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.is_admin = False
        user.is_staff = False
        user.is_superuser = False
        user.save(using=self.db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None, **kwargs):
        if not email:
            raise ValueError("Harap masukkan email")
        if not password:
            raise ValueError("Harap masukkan password")
        if not first_name:
            raise ValueError("Harap masukkan nama depan")
        if not last_name:
            raise ValueError("Harap masukkan nama belakang")
        
        user = self.model(
            email = self.normalize_email(email)
        )
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self.db)
        return user

    def create_staffuser(self, email, first_name, last_name, password=None, **kwargs):
        if not email:
            raise ValueError("Harap masukkan email")
        if not password:
            raise ValueError("Harap masukkan password")
        if not first_name:
            raise ValueError("Harap masukkan nama depan")
        if not last_name:
            raise ValueError("Harap masukkan nama belakang")
        
        user = self.model(
            email = self.normalize_email(email)
        )
        user.first_name = first_name
        user.last_name = last_name
        user.set_password(password)
        user.is_admin = False
        user.is_staff = True
        user.save(using=self.db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    ADMIN = 'admin'
    STAFF = 'staff'
    STATUS = [
        (ADMIN, _('Admin User')),
        (STAFF, _('Staff User')),
    ]
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=30)
    last_name = models.CharField(_('last name'), max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    def has_perm(self, perm, obj=None):
        # does the user have specific permission?
        # the simplest answer is yes
        return True

    def __str__(self):
        return f"{self.email}"
