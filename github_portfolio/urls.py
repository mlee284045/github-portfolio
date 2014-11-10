from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'github.views.index', name='index'),
    url(r'^proxy/(?P<path>.*)$', 'github.views.proxy_to', {'target_url': 'https://api.github.com/'}),
    url(r'^admin/', include(admin.site.urls)),
)
