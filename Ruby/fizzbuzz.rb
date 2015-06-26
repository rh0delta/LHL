values = []
for i in 1..100
	if i % 3 == 0 && i % 5 == 0
	  i = "FizzBuzz"
	  values << i
	elsif i % 3 == 0
	  i = "Fizz"
	  values << i
	elsif i % 5 == 0
	  i = "Buzz"
	  values << i
	else
	   values << i
	end
end
puts values
