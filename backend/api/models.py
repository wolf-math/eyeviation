from django.db import models
from django.contrib.auth.models import User

class Weapon(models.Model):
    name = models.CharField(max_length=100, default="Unnamed")
    base = models.CharField(max_length=100)
    sight = models.CharField(max_length=100)
    laser = models.CharField(max_length=100)
    grip = models.CharField(max_length=100)
    barrel = models.CharField(max_length=100)
    status = models.CharField(max_length=100, blank=True, null=True)
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="weapons")

    def __str__(self):
        return self.name