import { WEEK_DAY } from "../../src/model/Show";
import { UserRole } from "../../src/model/User";

export const userMock = {
  email: `email${Math.floor(Math.random() * 1000)}@email.com`,
  id: `${Math.floor(Math.random() * 1000)}`,
  name: `${Math.floor(Math.random() * 1000)}name`,
  password: "123456",
  role: UserRole.ADMIN,
};

export const bandMock = {
  id: `${Math.floor(Math.random() * 1000)}`,
  name: `${Math.floor(Math.random() * 1000)}name`,
  musicGenre: "genre",
  responsible: `responsible${Math.floor(Math.random() * 1000)}`,
};

export const showMock = {
  id: `${Math.floor(Math.random() * 1000)}`,
  startTime: 2,
  endTime: 4,
  weekDay: "2",
};

export const addShowMockFail = {
  weekDay: WEEK_DAY.SATURDAY,
  startTime: Date.parse('2021-11-14T12:05:00Z'),
  endTime: Date.parse('2021-11-14T12:11:00Z'),
};
