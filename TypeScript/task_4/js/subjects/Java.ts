/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        exxperienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || !this.teacher.exxperienceTeachingJava || this.teacher.exxperienceTeachingJava <= 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
