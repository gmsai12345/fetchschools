import { Controller, Get, Param,HttpException,HttpStatus, Query } from '@nestjs/common';
import { SchoolService } from './school.service';
import { getallSchool } from './dto/getallschool.dto';

@Controller('school')
export class SchoolController {
    constructor(private schoolservices:SchoolService){}
    @Get()
     getschool(@Query() getallschool:getallSchool): object[] | object
    {
        try
        {
            console.log(getallschool);
        return this.schoolservices.getallschool(getallschool);
        }
        catch(error)
        {
            const errorMessage = 'school name is not found in database';
            const errorResponse = {
                status: 401,
                error: errorMessage,
                details: error instanceof Error ? error.message : undefined,
            };
            throw new HttpException(errorResponse, 401);
        }
    }
}
