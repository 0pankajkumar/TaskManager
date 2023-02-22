from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "eta", "last_modified")


# Register Model
admin.site.register(Task, TaskAdmin)
