# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-14 20:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Historia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url_capa', models.CharField(max_length=50)),
                ('titulo', models.CharField(max_length=20)),
                ('texto', models.CharField(blank=True, max_length=1000)),
                ('url_figura1', models.CharField(blank=True, max_length=50)),
                ('url_figura2', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]
