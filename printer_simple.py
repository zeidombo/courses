def printer(func):
    def printer_simple(x, y):
        print("inputed values are {} and {}" .format(x, y))
    return printer_simple

@printer
def some_function(var1, var2):
    #Some work is done here
    return var1, var2

if __name__ == '__main__':
    result = some_function(1,2)