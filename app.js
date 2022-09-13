var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var facultyRouter = require('./routes/faculty');
var studentRouter = require('./routes/student');
var midterm_1Router = require('./routes/midterm_1');
var midterm_2Router = require('./routes/midterm_2');
var activityRouter = require('./routes/activity');
var quizRouter = require('./routes/quiz');
var extrasRouter = require('./routes/extras');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/faculty', facultyRouter);
app.use('/student', studentRouter);
app.use('/midterm1', midterm_1Router);
app.use('/midterm2', midterm_2Router);
app.use('/activity', activityRouter);
app.use('/quiz', quizRouter);
app.use('/extras', extrasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
