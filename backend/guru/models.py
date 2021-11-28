from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email, user_type, password=None, **kwargs):
        if not email:
            raise ValueError("Harap masukkan email")
        if not password:
            raise ValueError("Harap masukkan password")
        if not user_type:
            raise ValueError("Harap pilih tipe akun")

        user = self.model(
            email = self.normalize_email(email)
        )
        user.set_password(password)
        user.user_type = user_type
        user.is_admin = False
        user.is_staff = False
        user.is_superuser = False
        user.save(using=self.db)
        return user

    def create_superuser(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("Harap masukkan email")
        if not password:
            raise ValueError("Harap masukkan password")
        # if not user_type:
        #     raise ValueError("Harap pilih tipe akun")
        
        user = self.model(
            email = self.normalize_email(email)
        )
        user.set_password(password)
        # user.user_type = user_type
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self.db)
        return user

    def create_staffuser(self, email, user_type, password=None, **kwargs):
        if not email:
            raise ValueError("Harap masukkan email")
        if not password:
            raise ValueError("Harap masukkan password")
        if not user_type:
            raise ValueError("Harap pilih tipe akun")

        user = self.model(
            email = self.normalize_email(email)
        )
        user.user_type = user_type
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
    USER_TYPE_CHOICES = (
      (1, 'guru'),
      (2, 'siswa'),
      )

    email = models.EmailField(_('email address'), unique=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def has_perm(self, perm, obj=None):
        # does the user have specific permission?
        # the simplest answer is yes
        return True

    def __str__(self):
        return str(self.email)
