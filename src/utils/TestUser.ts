import testAvatar from '../assets/images/testAvatar.png'
import testAvatar2 from '../assets/images/testAvatar2.png'

export interface cvBase {
    avatar: string;
    name: string;
    githubLink: string;
    tel: string;
    email: string;
    description: string;
}

export interface cvGrades {

    courseCompletion: number;
    courseEngagment: number;
    projectDegree: number;
    teamProjectDegree: number;
}

export interface cvExpectations {
    workPlacePreffer: string;
    prefferCity: string;
    expectedContractType: string;
    expectedSalary: string;
    consentForFreeInternships: string;
    commercialProgrammingExperience: string;

}

export interface cvPortfolio {
    link1: string,
}

export interface cvScrum {
    link1: string;
    link2: string;
}

export interface cvFinalProject {
    link1: string;
    link2: string;
}

export interface finalCvInterface {
    base: cvBase;
    grades: cvGrades;
    expectations: cvExpectations;
    education: string;
    courses: string;
    experinceAtWork: string;
    portfolio: cvPortfolio;
    scrumProject: cvScrum;
    finalProject: cvFinalProject


}

export const cvDetails = {

    base: {
        avatar: testAvatar,
        name: 'Jan Kowalski',
        githubLink: 'https://github.com/',
        tel: '+48 566 072 227',
        email: 'yourEmail@gmail.com',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
    duo`
    },
    grades: {
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
    },
    expectations: {
        workPlacePreffer: "Biuro",
        prefferCity: "Warszawa",
        expectedContractType: "Umowa o pracę",
        expectedSalary: "8000 zł",
        consentForFreeInternships: "Tak",
        commercialProgrammingExperience: "6 miesięcy",
    },
    education: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    courses: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    experinceAtWork: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    portfolio: {
        link1: "https://github.com"
    },
    scrumProject: {
        link1: "https://github.com/MegaK-group-1/head-hunter-backend",
        link2: "https://github.com/MegaK-group-1/head-hunter-frontend",
    },
    finalProject: {
        link1: "https://github.com/MegaK-group-1/head-hunter-backend",
        link2: "https://github.com/MegaK-group-1/head-hunter-frontend",
    }

} as finalCvInterface



export const cvDetailsTwo  = {

        base: {
            avatar: testAvatar2,
            name: 'Anna Nowak',
            githubLink: 'https://github.com/',
            tel: '+48 227 566 072 ',
            email: 'yourEmail@gmail.com',
            description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
    duo`
        },
        grades: {
            courseCompletion: 3,
            courseEngagment: 4,
            projectDegree: 3,
            teamProjectDegree: 2,
        },
        expectations: {
            workPlacePreffer: "Zdalnie",
            prefferCity: "Kraków",
            expectedContractType: "B2B",
            expectedSalary: "4500 zł",
            consentForFreeInternships: "NIE",
            commercialProgrammingExperience: "Brak",
        },
        education: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        courses: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        experinceAtWork: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        portfolio: {
            link1: "https://github.com",
        },
        scrumProject: {
            link1: "https://github.com/MegaK-group-1/head-hunter-backend",
            link2: "https://github.com/MegaK-group-1/head-hunter-frontend",
            link4: "https://github.com/MegaK-group-1/head-hunter-frontend",
            link5: "https://github.com/MegaK-group-1/head-hunter-frontend",
        },
        finalProject: {
            link1: "https://github.com/MegaK-group-1/head-hunter-backend",
            link2: "https://github.com/MegaK-group-1/head-hunter-frontend",
            link3: "https://github.com/MegaK-group-1/head-hunter-frontend",
            link4: "https://github.com/MegaK-group-1/head-hunter-frontend",
        }

    } as finalCvInterface