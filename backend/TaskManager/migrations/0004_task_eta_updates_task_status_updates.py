# Generated by Django 4.1.7 on 2023-02-23 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManager', '0003_delete_audittrial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='eta_updates',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='task',
            name='status_updates',
            field=models.TextField(default=''),
        ),
    ]
