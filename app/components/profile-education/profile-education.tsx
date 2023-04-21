import { Col, Row } from "antd";

export type EducationProps = {
    educationList: EducationDetailProps[];
};

export type EducationDetailProps = {
    eventDate: string;
    eventType: EventType;
    schoolName: string;
    major: string;
    title: string;
    remark: Remark[];
};

export enum EventType {
    DropOut,
    Graduate,
    Begin,
}

export type Remark = {
    description: string;
};

function constructEventTitle(detail: EducationDetailProps): string {
    switch (detail.eventType) {
        case EventType.DropOut:
            return `Dropped out of ${detail.schoolName}`;
        case EventType.Graduate:
            return `Graduated ${detail.schoolName}, ${detail.title} ${detail.major}`;
        default:
            return `Begin ${detail.title} ${detail.major} at ${detail.schoolName}`;
    }
}

export default function ProfileEducation(props: EducationProps) {
    const boxes = [
        <Col
            span={24}
            md={6}
            style={{ height: "100px" }}
            className=" text-left box-shadow-lift-2"
        >
            I studied information technology at Cao Thang Technical College from 2016
            - 2019
        </Col>,
    ];

    return <Row>{boxes}</Row>;
};
