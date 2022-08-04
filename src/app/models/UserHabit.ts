export class UserHabit {
    constructor(
        public id: number = 0,
        public userId: string = "",
        public habitId: number = 0,
        public dailyCompletion: number = 0,
        public monthlyCompletion: number = 0,
        public yearlyCompletion: number = 0
        ) {}
}