from django.contrib import admin
from .models import Weapon

@admin.register(Weapon)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('name', 'base', 'sight', 'laser', 'grip', 'barrel', 'status')