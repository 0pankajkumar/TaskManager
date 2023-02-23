from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "eta", "status")


# class AuditTrailAdmin(admin.ModelAdmin):
#     list_display = ('field_updated', 'new_value', 'last_modified')


# Register Model
admin.site.register(Task, TaskAdmin)
# admin.site.register(AuditTrial)
