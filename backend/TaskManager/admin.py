from django.contrib import admin
from .models import Task, AuditTrial


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "eta", "status")

class AuditAdmin(admin.ModelAdmin):
    list_display = ('task')


# Register Model
my_models = [Task, AuditTrial]
admin.site.register(my_models)
