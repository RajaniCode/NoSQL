db=db.getSiblingDB("students_test");
print("Timestamp: " + (new Timestamp()).toString());
print("A:" + (new Date()).toString());
// use students;
db.grades.drop(); // optional
// for (i = 0; i < 10000000; i++) {
	
// 10000 * 4
for (i = 0; i < 10000; i++) {	
    for (j = 0; j < 4; j++) {
	assess = ['exam', 'quiz', 'homework', 'homework'];
	record = {'student_id':i, 'type':assess[j], 'score':Math.random()*100};
	db.grades.insert(record);
    }
	if (i === 9999) {
		print("B:" + (new Date()).toString());
	}
}
print("C:" + (new Date()).toString());