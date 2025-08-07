function reading(number_of_pages, pages_read_in_1_hour, n_days_to_finish) {
    let time_to_read_the_book = number_of_pages / pages_read_in_1_hour;
    let final_time = time_to_read_the_book / n_days_to_finish;

    console.log(final_time);
}