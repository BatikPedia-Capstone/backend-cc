gcloud builds submit --tag gcr.io/test-model-407706/batikpedia-sql-service

gcloud run deploy batikpedia-sql-service \
    --image gcr.io/test-model-407706/batikpedia-sql-service \
    --add-cloudsql-instances test-model-407706:asia-southeast2:batikpedia \
    --update-env-vars INSTANCE_CONNECTION_NAME=test-model-407706:asia-southeast2:batikpedia,DB_PASS=root,DB_USER=root,DB_NAME=batikpedia \
    --platform managed \
    --region asia-southeast2 \
    --allow-unauthenticated \
    --project=test-model-407706