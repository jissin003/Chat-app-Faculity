# Generated by Django 5.0.3 on 2024-04-12 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0012_coursediary_batch_coursediary_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursediary',
            name='batch',
            field=models.IntegerField(choices=[(1, '1'), (2, '2')], null=True),
        ),
    ]
