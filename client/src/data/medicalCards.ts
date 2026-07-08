export interface MedicalCard {
  studentId: string;
  cardNumber: string | null;
  status: 'Active' | 'Inactive' | 'Not Issued';
  issueDate: string | null;
}

const medicalCards: MedicalCard[] = [];

function addStudents(
  start: number,
  end: number,
  issueYear: number,
  allowInactive = false
) {
  for (let id = start; id <= end; id++) {
    const hasCard = Math.random() > 0.15; // 85% have cards

    if (!hasCard) {
      medicalCards.push({
        studentId: id.toString(),
        cardNumber: null,
        status: 'Not Issued',
        issueDate: null,
      });
      continue;
    }

    const cardNumber = Math.floor(Math.random() * 9000) + 100;

    const month = Math.floor(Math.random() * 5) + 8; // Aug-Dec
    const day = Math.floor(Math.random() * 28) + 1;

    const status =
      allowInactive && Math.random() < 0.25
        ? 'Inactive'
        : 'Active';

    medicalCards.push({
      studentId: id.toString(),
      cardNumber: `${cardNumber}`,
      status,
      issueDate: `${day}/${month}/${issueYear}`,
    });
  }
}

/* 2020 batch */
addStudents(2004001, 2004133, 2020, true);
addStudents(2002001, 2002183, 2020, true);
addStudents(2003001, 2003184, 2020, true);

/* 2021 batch */
addStudents(2104001, 2104133, 2021);
addStudents(2102001, 2102183, 2021);
addStudents(2103001, 2103184, 2021);

/* 2022 batch */
addStudents(2204001, 2204133, 2022);
addStudents(2202001, 2202183, 2022);
addStudents(2203001, 2203184, 2022);

/* 2023 batch */
addStudents(2304001, 2304133, 2023);
addStudents(2302001, 2302183, 2023);
addStudents(2303001, 2303184, 2023);

export { medicalCards };