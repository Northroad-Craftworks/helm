{{- define "microservices.database-name" -}}
{{ .Release.Name }}-couchdb
{{- end -}}