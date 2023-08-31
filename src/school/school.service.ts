import { Injectable } from '@nestjs/common';
import { getallSchool } from './dto/getallschool.dto';
import schooljson from '../utils/schooldata.json';

@Injectable()
export class SchoolService {
    getallschool(getallschool: getallSchool): object[] | object {
        const { page, size, schoolname } = getallschool;
        const pageNum = parseInt(page,10);
        const pageSize = parseInt(size,10);
        if (pageSize === 0) {
            const searchRegex = new RegExp(`^${schoolname}`, 'i'); 
            return schooljson.find(school => searchRegex.test(school.schoolname));
        }else {
            const startIndex:number = (pageNum-1) * pageSize;
            const endIndex:number = startIndex + pageSize;   
            console.log(startIndex + "start index\n");
            console.log(endIndex);
            const searchRegex = new RegExp(`^${schoolname}`, 'i'); 
            const regexschoollist:object[] = schooljson.filter(school => searchRegex.test(school.schoolname));
            const schoolsList: object[] = regexschoollist.slice(startIndex, endIndex);
            return schoolsList;
        }
    }
}
