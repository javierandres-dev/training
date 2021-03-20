""" Escribir dos funciones que permitan calcular:
    * La cantidad de segundos en un tiempo dado en horas, minutos y segundos.
    * La cantidad de horas, minutos y segundos de un tiempo dado en segundos.
"""


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


if __name__ == "__main__":
    print("Testing time to seconds ...")
    print(time_to_seconds(1, 1, 1))
    print(time_to_seconds(2, 16, 59))
    print(time_to_seconds(60, 60, 60))
    print("Testing get seconds ...")
    print(get_seconds(59))
    print(get_seconds(60))
    print(get_seconds(61))
    print(get_seconds(3599))
    print(get_seconds(3600))
    print(get_seconds(3601))
