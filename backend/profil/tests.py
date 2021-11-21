from django.test import TestCase
from guru.models import CustomUser

class UserProfileTest(TestCase):

    def test_user_model_has_profile(self):
        user = CustomUser(
            email = "test_user_ok@mail.com",
            first_name = "ok",
            last_name = "oklast",
            password = "testpass123",
            # password2 = "testpass123"
        )
        user.save()

        self.assertTrue(
            hasattr(user, 'profile')
        )