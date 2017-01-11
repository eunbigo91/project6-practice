/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
$(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());


$(function(){
    var model = {
        students: [
            {
                name: 'Slappy the Frog',
                id: 'slappy',
                absences: 0
            },
            {
                name: 'Lilly the Lizard',
                id: 'lilly',
                absences: 0
            },
            {
                name: 'Paulrus the Walrus',
                id: 'paulrus',
                absences: 0
            },
            {
                name: 'Gregory the Goat',
                id: 'gregory',
                absences: 0
            },
            {
                name: 'Adam the Anaconda',
                id: 'adam',
                absences: 0
            },
            {
                name: 'Shaun the Sheep',
                id: 'shaun',
                absences: 0
            }
        ]
    };

    var octopus = {
        init: function() {
            view.init();
        },

        // Get student names and absence totals from the model
        getStudents: function() {
            return model.students;
        }
    };

    var view = {
        init: function() {
            this.render();
        },
        render: function() {
            var students = octopus.getStudents();
            var list = '';
            $.each(students, function(studentIndex, student){
                list += "<tr id='"+studentIndex+"''> <td class='name-col'>" + student.name + "</td>";
                for (var i=0; i<12; i++){
                    list += "<td class='attend-col'><input type='checkbox'></td>";
                }
                list += "<td class='absences-col'>"+student.absences+"</td></tr>";
            });
            $('#tbody').html(list);
        }
    };

    octopus.init();
});