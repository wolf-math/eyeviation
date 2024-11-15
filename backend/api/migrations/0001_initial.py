# Generated by Django 5.1.3 on 2024-11-15 09:52

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Weapon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('base', models.CharField(max_length=100)),
                ('sight', models.CharField(max_length=100)),
                ('laser', models.CharField(max_length=100)),
                ('grip', models.CharField(max_length=100)),
                ('barrel', models.CharField(max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='weapons', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]