from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "eta", "status")



# Register Model
my_models = [Task]
admin.site.register(my_models)
