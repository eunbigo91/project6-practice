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
        attendance: JSON.parse(localStorage.attendance),
        save: function(){
            console.log(localStorage.attendance);
            localStorage.attendance =  JSON.stringify(model.attendance);
        }
    };

    var octopus = {
        init: function() {
            view.init();
        },

        getAttendance: function(personName,index) {
            return model.attendance[personName][index];
        },

        setAttendance: function(personName, index, value) {
            var val = !!value;
            model.attendance[personName][index] = val;
            model.save();
        },

        getNames: function() {
            var names = [];
            $.each(model.attendance, function(key, val) {
                names.push(key);
            });
            return names;
        }
    };

    var view = {
        init: function() {
            var students = octopus.getNames();
            var list = '';
            $.each(students, function(studentIndex, student){
                list += "<tr id='"+studentIndex+"''> <td class='name-col'>" + student + "</td>";
                for (var i=0; i<12; i++){
                    list += "<td class='attend-col'><input type='checkbox'></td>";
                }
                list += "<td class='missed-col'>"+ 0 +"</td></tr>";
            });
            $('#tbody').html(list);

            $('.attend-col').on('click', function(event) {
                var name = $(this).closest('tr').find('.name-col').text();
                var index = $(this).index() - 1;
                var val = $(this).children('input').prop('checked');

                octopus.setAttendance(name, index, val);

                view.render();
            });

            view.render();
        },
        render: function() {
            var students = octopus.getNames();

            $.each(students, function(studentIndex, student){
                $('#'+studentIndex).each(function(index, studentRow) {

                    var dayChecks = $(studentRow).find('input');
                    var missedDays = $(studentRow).find('.missed-col');
                    var numMissed = 0;
                    var name = $(studentRow).find('.name-col').text();

                    dayChecks.each(function(index, el) {
                        //set checked from controller data
                        var checked = octopus.getAttendance(name, index);
                        $(this).prop('checked', checked);
                        //count numMissed
                        if (!checked) {
                            numMissed++;
                        }
                    });

                    missedDays.text(numMissed);

                });
            });
        }
    };

    octopus.init();
});