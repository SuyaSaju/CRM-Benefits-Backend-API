import { Module } from '@nestjs/common';

import { UtilitiesModule } from './api/utilities/utilities.module';

@Module({
  imports: [UtilitiesModule],
  controllers: [],
  providers: []
})
export class AppModule {}
