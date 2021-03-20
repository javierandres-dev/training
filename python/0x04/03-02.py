""" Escribir un programa que lea de teclado dos tiempos expresados en horas,
    minutos y segundos; las sume y muestre el resultado en horas, minutos y
    segundos por pantalla. """


def time_to_seconds(hours, minutes, seconds):
    """ returns the number of seconds in a given time
        in hours, minutes and seconds """
    h = hours * 3600
    m = minutes * 60
    return int(h + m + seconds)


def get_seconds(s):
    """ returns the number of hours, minutes and seconds
        of a given time in seconds """
    if s < 60:
        return (0, 0, s)
    if s < 3600:
        minutes = int(s / 60)
        seconds = s - (minutes * 60)
        return (0, minutes, seconds)
    hours = int(s / 3600)
    seconds = s - (hours * 3600)
    minutes = int(seconds / 60)
    seconds = seconds - (minutes * 60)
    return (hours, minutes, seconds)


def main():
    h = int(input("First time\nInput hours: "))
    m = int(input("Input minutes: "))
    s = int(input("Input seconds: "))
    r1 = time_to_seconds(h, m, s)
    h = int(input("Second time\nInput hours: "))
    m = int(input("Input minutes: "))
    s = int(input("Input seconds: "))
    r2 = time_to_seconds(h, m, s)
    result = get_seconds(r1 + r2)
    print("The sum is:\nHours: {} Minutes: {} Seconds: {}".format(
          result[0], result[1], result[2]))


if __name__ == "__main__":
    main()
