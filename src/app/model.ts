export interface Application {
    transId: number;
    transDate: string;
    submissionState: string;
    submissionStatus: string;
    refNo: number;
    etosRefNo: number;
    totalPraxeis: number;
    anastoli: boolean;
    revokeDate: string;
    dedConclusionDate: string;
    dedArApofasis?: number;
    anastoliTransId?: number;
    anastoliTransDate: string;
    anastoliSubmissionState: string;
    anastoliSubmissionStatus: string;
    anastoliRefNo?: number;
    anastoliEtosRefNo?: number;
    antiklitosAfm: string;
    anastoliDedConclusionDate: string;
}

export interface RootObject {
    applications: Application[];
}