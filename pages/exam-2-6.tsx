import { Card } from '@/components/shared/Card'
import { CardLayout } from '@/components/shared/CardLayout'
import { CardTitle } from '@/components/shared/CardTitle'
import { Button } from 'antd'
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Answer = ({
	no,
	children,
}: {
	no: number
	children: React.ReactNode
}) => {
	return (
		<div>
			<span className="mr-1 font-semibold">{no}. answer is:</span>
			{children}
		</div>
	)
}

const Exam26: NextPage = () => {
	const mokcData23 = [4, 123123, 3, 65456, 1123, 433]

	const mockData45 = [
		{
			name: 'John',
			age: 60,
		},
		{
			name: 'Doe',
			age: 20,
		},
		{
			name: 'Will',
			age: 40,
		},
		{
			name: 'Smith',
			age: 69,
		},
		{
			name: 'Mayer',
			age: 56,
		},
	]

	const mockData6 = [
		{
			name: 'John',
			age: 60,
			salary: 50000,
			children: 3,
		},
		{
			name: 'Doe',
			age: 20,
			salary: 30000,
			children: 2,
		},
		{
			name: 'Will',
			age: 40,
			salary: 20000,
			children: 1,
		},
		{
			name: 'Smith',
			age: 69,
			salary: 25000,
			children: 0,
		},
		{
			name: 'Mayer',
			age: 56,
			salary: 60000,
			children: 1,
		},
	]

	/**
	 * 2
	 */

	function findMaxValue(arr: number[]) {
		return arr.reduce((pre, cur) => (pre > cur ? pre : cur))
	}

	/**
	 * 3
	 */
	function sortArray(arr: number[]) {
		const result = []
		while (arr.length) {
			const max = findMaxValue(arr)
			result.push(max)
			arr.splice(arr.indexOf(max), 1)
		}
		return result
	}

	/**
	 * 4
	 */
	function findMaxAge(arr: { name: string; age: number }[]) {
		return arr.reduce((pre, cur) => (pre.age > cur.age ? pre : cur))
	}

	/**
	 * 5
	 */
	function sortByAge(arr: { name: string; age: number }[]) {
		const result = []
		while (arr.length) {
			const max = findMaxAge(arr)
			result.push(max)
			arr.splice(arr.indexOf(max), 1)
		}
		return result
	}

	/**
	 * 6
	 */
	type DataT = {
		name: string
		age: number
		salary: number
		children: number
	}

	function maximum(arr: DataT[], fn: (data: DataT) => number) {
		return arr.reduce((pre, cur) => (fn(pre) > fn(cur) ? pre : cur))
	}

	return (
		<>
			<CardLayout>
				<CardTitle>Exam 2 - 6</CardTitle>

				<Card>
					<div className="flex flex-col gap-y-4">
						<Answer no={2}>{findMaxValue(mokcData23)}</Answer>
						<Answer no={3}>
							{sortArray(mokcData23).join(', ')}
						</Answer>
						<Answer no={4}>
							{JSON.stringify(findMaxAge(mockData45))}
						</Answer>
						<Answer no={5}>
							{JSON.stringify(sortByAge(mockData45))}
						</Answer>
						<Answer no={6}>
							<div>
								<span className="mr-1 block">
									find max by age
								</span>
								{JSON.stringify(
									maximum(mockData6, (person) => person.age)
								)}
							</div>

							<div>
								<span className="mr-1 block">
									find max by salary
								</span>
								{JSON.stringify(
									maximum(
										mockData6,
										(person) => person.salary
									)
								)}
							</div>

							<div>
								<span className="mr-1 block">
									find max by children
								</span>
								{JSON.stringify(
									maximum(
										mockData6,
										(person) => person.children
									)
								)}
							</div>
						</Answer>
					</div>

					<div className="w-full bg-neutral-300 my-4 h-[1px]"></div>

					<Link href="/login">
						<Button block type="default">
							Back
						</Button>
					</Link>
				</Card>
			</CardLayout>
		</>
	)
}

export default Exam26
