# Generated by Django 4.1.7 on 2023-02-23 10:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TaskManager', '0002_remove_task_task_id'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AuditTrial',
        ),
    ]