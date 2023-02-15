import SwaggerUI from 'swagger-ui'
import spec from './index.json';
import 'swagger-ui/dist/swagger-ui.css';

SwaggerUI({ spec, dom_id: '#swagger' });
